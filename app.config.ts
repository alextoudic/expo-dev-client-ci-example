import { ExpoConfig } from "@expo/config";

export default {
  name: "expo-dev-client-ci-example",
  slug: "expo-dev-client-ci-example",
  version: "1.0.0",
  owner: "alextoudic",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.alextoudic.example"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    },
    package: "com.alextoudic.example"
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      projectId: "d7cdf52e-ab37-4b49-b7f4-cf7fc127f699"
    }
  },
  runtimeVersion: process.env.RUNTIME_VERSION ?? "1",
  updates: {
    url: "https://u.expo.dev/d7cdf52e-ab37-4b49-b7f4-cf7fc127f699"
  }
} satisfies ExpoConfig
