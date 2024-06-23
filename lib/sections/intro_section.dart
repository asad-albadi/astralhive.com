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
            Text(
              'About Us',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              'Astral Hive Solutions combines the expertise and dedication of a solo developer with the professionalism and reliability of a full-scale tech company. Committed to delivering high-quality, innovative, and reliable digital products tailored to client needs, with extensive experience in developing high-performance applications for Windows, Linux, Android, and the web. Each project receives personalized attention and care.',
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
