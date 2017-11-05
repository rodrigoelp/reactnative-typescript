package com.interop;

import android.graphics.Typeface;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class FontLookup extends ReactContextBaseJavaModule {

    public FontLookup(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FontLookup";
    }

    @ReactMethod
    public void getRegisteredFonts(Promise promise) {
        final List<String> fonts = this.getSystemFonts();
        WritableArray array = Arguments.fromList(fonts);
        promise.resolve(array);
    }

    private List<String> getSystemFonts() {
        ArrayList<String> list = new ArrayList<>();
        try {
            Typeface typeface = Typeface.create(Typeface.DEFAULT, Typeface.NORMAL);
            Field f = Typeface.class.getDeclaredField("sSystemFontMap");
            f.setAccessible(true);
            @SuppressWarnings("unchecked")
            Map<String, Typeface> map = (Map<String, Typeface>) f.get(typeface);
            for (Map.Entry<String, Typeface> item : map.entrySet()) {
                list.add(item.getKey());
            }
        }
        catch (Exception e) {
            Log.d("FontLookup", "Failed to get the list of fonts as " + e.toString());
        }
        return list;
    }
}
