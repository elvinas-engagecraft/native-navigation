module.exports = {
  dependency: {
    platforms: {
      android: {
        sourceDir: "./lib/android",
        packageImportPath: "import com.airbnb.android.react.navigation.NativeNavigationPackage;",
        packageInstance: "new NativeNavigationPackage()"
      }
    }
  }
};
