import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        int crossAxisCount;
        double childAspectRatio;

        if (constraints.maxWidth > 1200) {
          crossAxisCount = 4;
          childAspectRatio = 1.0;
        } else if (constraints.maxWidth > 800) {
          crossAxisCount = 3;
          childAspectRatio = 1.1;
        } else if (constraints.maxWidth > 600) {
          crossAxisCount = 2;
          childAspectRatio = 1.2;
        } else {
          crossAxisCount = 1;
          childAspectRatio = 3;
        }

        return Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              'Our Services',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            GridView.count(
              crossAxisCount: crossAxisCount,
              crossAxisSpacing: 16,
              mainAxisSpacing: 16,
              childAspectRatio: childAspectRatio,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              children: const [
                CustomCard(
                  icon: FontAwesomeIcons.laptopCode,
                  title: 'Cross-Platform Apps',
                  description:
                      'High-performance applications for Windows, Linux, Android, and the web.',
                ),
                CustomCard(
                  icon: FontAwesomeIcons.gear,
                  title: 'Automation',
                  description:
                      'Streamline your processes with custom automation solutions.',
                ),
                CustomCard(
                  icon: FontAwesomeIcons.networkWired,
                  title: 'Comprehensive Systems',
                  description:
                      'Comprehensive solutions for PoS, management systems, and other integrated services.',
                ),
              ],
            ),
          ],
        );
      },
    );
  }
}
