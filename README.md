# react-native-gesture-handler `testID` bug

This repo demonstrates an issue with `react-native-gesture-handler` on iOS, when it comes to using `testID`.

The application in this repo renders a single button with a `testID` of `demo-button`. Current versions of `react-native-gesture-handler` attach the `testID` twice though, leading to the following error while running e2e tests:

```
  ● Demo App › should have demo button visible

    Test Failed: Multiple elements found for “MATCHER(id == “demo-button”)”

    View Hierarchy:
    <?xml version="1.0" encoding="utf-8"?>
    <ViewHierarchy>
        <UIWindow alpha="1.0" class="UIWindow" focused="false" height="852" ptr="0x10390b5b0" visibility="visible" width="393">
            <UITransitionView alpha="1.0" class="UITransitionView" focused="false" height="852" ptr="0x103a1c1c0" visibility="visible" width="393" x="0" y="0">
                <UIDropShadowView alpha="1.0" class="UIDropShadowView" focused="false" height="852" ptr="0x103a3e4f0" visibility="visible" width="393" x="0" y="0">
                    <RCTSurfaceHostingProxyRootView alpha="1.0" class="RCTSurfaceHostingProxyRootView" focused="false" height="852" ptr="0x103c162d0" visibility="visible" width="393" x="0" y="0">
                        <RCTSurfaceView alpha="1.0" class="RCTSurfaceView" focused="false" height="852" ptr="0x103a81b00" visibility="visible" width="393" x="0" y="0">
                            <RCTRootComponentView alpha="1.0" class="RCTRootComponentView" focused="false" height="852" label="Press Me!" ptr="0x138f62310" tag="1" visibility="visible" width="393" x="0" y="0">
                                <RNCSafeAreaProviderComponentView alpha="1.0" class="RNCSafeAreaProviderComponentView" focused="false" height="852" label="Press Me!" ptr="0x103c16630" tag="2" visibility="visible" width="393" x="0" y="0">
                                    <RNCSafeAreaViewComponentView alpha="1.0" class="RNCSafeAreaViewComponentView" focused="false" height="852" label="Press Me!" ptr="0x13d534440" tag="20" visibility="visible" width="393" x="0" y="0">
                                        <RNGestureHandlerButtonComponentView alpha="1.0" class="RNGestureHandlerButtonComponentView" focused="false" height="41" id="demo-button" label="Press Me!" ptr="0x13d534ae0" tag="18" visibility="visible" width="393" x="0" y="67">
                                            <RNGestureHandlerButton alpha="1.0" class="RNGestureHandlerButton" focused="false" height="41" id="demo-button" label="Press Me!" ptr="0x13d5075c0" visibility="visible" width="393" x="0" y="0">
                                                <RCTViewComponentView alpha="0.0" class="RCTViewComponentView" focused="false" height="41" ptr="0x13d534fc0" tag="12" visibility="visible" width="393" x="0" y="0" />
                                                <RCTParagraphComponentView alpha="1.0" class="RCTParagraphComponentView" focused="false" height="17" label="Press Me!" ptr="0x13d5352a0" tag="16" text="Press Me!" visibility="visible" width="68" x="162" y="12">
                                                    <RCTParagraphTextView alpha="1.0" class="RCTParagraphTextView" focused="false" height="17" ptr="0x13d5355e0" visibility="visible" width="68" x="0" y="0" />
                                                </RCTParagraphComponentView>
                                            </RNGestureHandlerButton>
                                        </RNGestureHandlerButtonComponentView>
                                    </RNCSafeAreaViewComponentView>
                                </RNCSafeAreaProviderComponentView>
                                <RCTViewComponentView alpha="1.0" class="RCTViewComponentView" focused="false" height="852" ptr="0x139182c30" tag="8" visibility="visible" width="393" x="0" y="0">
                                    <RCTDebuggingOverlayComponentView alpha="1.0" class="RCTDebuggingOverlayComponentView" focused="false" height="852" ptr="0x1391fb0c0" tag="6" visibility="visible" width="393" x="0" y="0">
                                        <RCTDebuggingOverlay alpha="1.0" class="RCTDebuggingOverlay" focused="false" height="852" ptr="0x139dd7800" visibility="visible" width="393" x="0" y="0" />
                                    </RCTDebuggingOverlayComponentView>
                                </RCTViewComponentView>
                            </RCTRootComponentView>
                        </RCTSurfaceView>
                    </RCTSurfaceHostingProxyRootView>
                </UIDropShadowView>
            </UITransitionView>
        </UIWindow>
    </ViewHierarchy>
```

In the view hierarchy it becomes clear that the `id` is both present on `RNGestureHandlerButtonComponentView` as well as on `RNGestureHandlerButton`.

## Build and run

- `npm i; npm run ios`
- `npm run detox:test:ios -- --loglevel verbose`

**Expected:** Tests pass, no errors

**Actual:** See error above

## More info

- All versions >= 2.25.0 are affected (tested up until the current version 2.28.0)
- Version 0.24.0 works as expected
- Only tested iOS
- Only tested Fabric / new architecture, as `RNGestureHandlerButtonComponentView` is Fabric specific
