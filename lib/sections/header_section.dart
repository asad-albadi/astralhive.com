import 'package:astralhive_website/utils/constants.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HeaderSection extends StatelessWidget {
  const HeaderSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SvgPicture.asset(
          'assets/vectors/astralhive_logo_semi_trans.svg', // Path to your SVG logo
          width: 200,
          color: primaryColor,
        ),
        const SizedBox(height: 16),
        SelectableText(
          'Welcome to Astral Hive',
          style: Theme.of(context).textTheme.headlineMedium,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        SelectableText(
          'Creating high-performance applications for Windows, Linux, Android, and the web, along with comprehensive automation solutions.',
          style: Theme.of(context).textTheme.titleMedium,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
