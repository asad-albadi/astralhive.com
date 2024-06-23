import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

const Color primaryColor = Color(0xFFBD93F9);
const Color backgroundColor = Color(0xFF282A36);
const Color backgroundColor2 = Color(0xFF44475A);
const Color foregroundColor = Color(0xFFF8F8F2);
const Color successColor = Color(0xFF50FA7B);
const Color errorColor = Color(0xFFFF5555);
const Color warningColor = Color(0xFFFFB86C);
const Color infoColor = Color(0xFF8BE9FD);

Future<void> launchURL(url) async {
  if (!await launchUrl(Uri.parse(url))) {}
}
