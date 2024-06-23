import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

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
              'Our Projects',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              'Here are some of the projects we have successfully completed.',
              style: Theme.of(context).textTheme.titleMedium,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            GridView.count(
              crossAxisCount: crossAxisCount,
              crossAxisSpacing: 16,
              mainAxisSpacing: 16,
              childAspectRatio: childAspectRatio,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              children: const [
                CustomCard(
                  imagePath: 'assets/images/astralcalc_logo.png',
                  title: 'AstralCalc',
                  description: 'Comprehensive calculation and conversion app.',
                ),
              ],
            ),
          ],
        );
      },
    );
  }
}
