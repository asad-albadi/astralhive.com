import 'package:astralhive_website/utils/constants.dart';
import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';

class HighlightsSection extends StatelessWidget {
  const HighlightsSection({super.key});

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
              'Our Highlights',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              'Proud of a portfolio of successful projects crafted with the highest standards of quality and performance. From enterprise-level applications to consumer-facing apps, covering a wide range of industries and use cases. Astral Hive Solutions offers the benefits of direct communication, agile development, and a deep commitment to project success.',
              style: TextStyle(
                fontSize: constraints.maxWidth > 600 ? 18 : 16,
                color: foregroundColor,
              ),
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
                  icon: Icons.security,
                  title: 'Security',
                  description: 'Top-notch security measures in every project.',
                ),
                CustomCard(
                  icon: Icons.speed,
                  title: 'Performance',
                  description: 'Optimized for maximum performance.',
                ),
                CustomCard(
                  icon: Icons.support,
                  title: 'Support',
                  description: '24/7 support for all our clients.',
                ),
              ],
            ),
          ],
        );
      },
    );
  }
}
