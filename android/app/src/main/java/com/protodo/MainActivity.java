package com.protodo;

import android.os.Bundle;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  //   // 识别手势
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "protodo";
  }
  
}
