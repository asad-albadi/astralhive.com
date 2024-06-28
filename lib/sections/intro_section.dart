import 'package:astralhive_website/utils/constants.dart';
import 'package:flutter/material.dart';

class IntroSection extends StatelessWidget {
  const IntroSection({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        double fontSize = constraints.maxWidth > 600 ? 18 : 16;
        return Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SelectableText(
              'About Us',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            SelectableText(
              'Astral Hive delivers high-quality, innovative, and reliable digital products tailored to client needs. Extensive experience ensures each project receives personalized attention and care.',
              style: TextStyle(
                fontSize: fontSize,
                color: foregroundColor,
              ),
              textAlign: TextAlign.center,
            ),
          ],
        );
      },
    );
  }
}
