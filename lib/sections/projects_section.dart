import 'package:astralhive_website/utils/constants.dart';
import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class ProjectsSection extends StatelessWidget {
  const ProjectsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        int crossAxisCount;

        if (constraints.maxWidth > 1200) {
          crossAxisCount = 4;
        } else if (constraints.maxWidth > 800) {
          crossAxisCount = 3;
        } else if (constraints.maxWidth > 600) {
          crossAxisCount = 2;
        } else {
          crossAxisCount = 1;
        }

        return Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SelectableText(
              'Our Projects',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            SelectableText(
              'Here are some of the projects we have successfully completed.',
              style: Theme.of(context).textTheme.titleMedium,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            AlignedGridView.count(
              crossAxisCount: crossAxisCount,
              crossAxisSpacing: 16,
              mainAxisSpacing: 16,
              itemCount: 1, // Adjust this count to reflect your number of items
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) {
                return CustomCard(
                  imagePath: 'assets/images/astralcalc_logo.png',
                  title: 'AstralCalc',
                  description: 'Comprehensive calculation and conversion app.',
                  onPressed: () {
                    launchURL(
                        "https://play.google.com/store/apps/details?id=com.ahs.astralcalc");
                  },
                );
              },
            ),
          ],
        );
      },
    );
  }
}
