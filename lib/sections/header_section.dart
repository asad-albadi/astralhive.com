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
          'assets/vectors/code.svg', // Path to your SVG logo
          height: 200,
          width: 200,
          color: primaryColor,
        ),
        const SizedBox(height: 16),
        Text(
          'Welcome to Astral Hive Solutions',
          style: Theme.of(context).textTheme.headlineMedium,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        Text(
          'We develop Windows, Linux, Android, and Web Apps.',
          style: Theme.of(context).textTheme.titleMedium,
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
