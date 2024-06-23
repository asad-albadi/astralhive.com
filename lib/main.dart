import 'dart:ui';

import 'package:astralhive_website/screens/home_screen.dart';
import 'package:astralhive_website/utils/constants.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const AstralHiveSolutions());
}

class NoThumbScrollBehavior extends ScrollBehavior {
  @override
  Set<PointerDeviceKind> get dragDevices => {
        PointerDeviceKind.touch,
        PointerDeviceKind.mouse,
        PointerDeviceKind.stylus,
        PointerDeviceKind.trackpad,
      };
}

class AstralHiveSolutions extends StatelessWidget {
  const AstralHiveSolutions({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      scrollBehavior: NoThumbScrollBehavior().copyWith(scrollbars: false),
      title: 'Astral Hive Solutions',
      theme: ThemeData(
        primaryColor: primaryColor,
        scaffoldBackgroundColor: backgroundColor,
        fontFamily: 'SourceCodePro', // Set the default font for the app
        textTheme: const TextTheme(
          bodyLarge: TextStyle(color: foregroundColor),
          bodyMedium: TextStyle(color: foregroundColor),
          headlineMedium: TextStyle(
            color: primaryColor,
            fontWeight: FontWeight.bold,
            fontVariations: [
              FontVariation('wght', 700), // Bold weight
            ],
          ),
          titleMedium: TextStyle(color: foregroundColor),
          headlineSmall: TextStyle(
            color: primaryColor,
            fontWeight: FontWeight.bold,
            fontVariations: [
              FontVariation('wght', 600), // Semi-bold weight
            ],
          ),
          titleLarge: TextStyle(
            color: foregroundColor,
            fontWeight: FontWeight.bold,
            fontVariations: [
              FontVariation('wght', 700), // Bold weight
            ],
          ),
          bodySmall: TextStyle(color: foregroundColor),
        ),
        colorScheme: const ColorScheme.dark(
          primary: primaryColor,
          background: backgroundColor,
          surface: backgroundColor2,
          onPrimary: foregroundColor,
          onBackground: foregroundColor,
          onSurface: foregroundColor,
          secondary: infoColor,
          error: errorColor,
          onError: backgroundColor,
        ).copyWith(background: backgroundColor),
      ),
      home: const HomeScreen(),
    );
  }
}
