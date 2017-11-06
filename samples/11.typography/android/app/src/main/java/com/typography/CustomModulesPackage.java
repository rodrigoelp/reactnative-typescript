package com.typography;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by Rod on 6/11/17
 * Making things differently to iOS... in here we do not export the module by
 * adding something to the class... we need to create a package that
 * will contain all the different modules to be exported.
 */
public class CustomModulesPackage implements ReactPackage {
    /**
     * Creates a list of modules to be exported and exposed to javascript.
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new FontLookup(reactContext));
        return modules;
    }

    /**
     * So far, I got no idea what this method is supposed to do...
     * but given I have to implement it, let's get it to return nothing.
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}