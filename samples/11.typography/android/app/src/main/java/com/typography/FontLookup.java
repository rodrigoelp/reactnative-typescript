package com.typography;

import android.graphics.Typeface;
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

/**
 * Created by Rod on 6/11/17
 * Class definition to lookup fonts registered in the Android ecosystem.
 * This definition is meant to interact with react-native
 */
public class FontLookup extends ReactContextBaseJavaModule {
    /**
     * Builds a new instance of FontLookup for react native.
     */
    public FontLookup(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    /**
     * Gets the name used by react-native to load the module.
     */
    @Override
    public String getName() {
        return "FontLookup"; // this gives the name to the native module loader in react native.
    }

    /**
     * Gets a list of fonts registered in android. The result of this query is
     * provided by resolving or failing the instance of the promise provided (this is horrible facebook... horrible)
     */
    @ReactMethod
    public void getFontFamilies(Promise promise) {
        try {
            final List<String> fonts = this.getSystemFonts();
            WritableArray array = Arguments.fromList(fonts);
            promise.resolve(array);
        }
        catch (Exception ex) {
            promise.reject("E_FONT_ERROR", ex);
        }
    }

    private List<String> getSystemFonts() throws NoSuchFieldException, IllegalAccessException {
        // unfortunately, android does not seem to have an API as pretty as iOS to get
        // programmatically the list of fonts in the current device.
        // So, needed to reflect on it. Thank you stackoverflow :)
        Typeface t = Typeface.create(Typeface.DEFAULT, Typeface.NORMAL);
        Field f = Typeface.class.getDeclaredField("sSystemFontMap");
        f.setAccessible(true);
        
        // stupid java complaining that a specialised generic definition
        // does not match its generic definition.
        // So, had to suppress the warning given as I casted f.get()..
        @SuppressWarnings("unchecked")
        Map<String, Typeface> map = (Map<String, Typeface>) f.get(t);

        ArrayList<String> fonts = new ArrayList<String>();
        for (Map.Entry<String, Typeface> entry : map.entrySet()) {
            fonts.add(entry.getKey());
        }
        return fonts;
    }
}