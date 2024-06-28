import 'package:astralhive_website/utils/constants.dart';
import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class HighlightsSection extends StatelessWidget {
  const HighlightsSection({super.key});

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
              'Our Highlights',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            SelectableText(
              'The portfolio features successful projects crafted with the highest standards of quality and performance, spanning various industries and use cases. Benefits include direct communication, agile development, and a strong commitment to project success.',
              style: TextStyle(
                fontSize: constraints.maxWidth > 600 ? 18 : 16,
                color: foregroundColor,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 16),
            AlignedGridView.count(
              crossAxisCount: crossAxisCount,
              crossAxisSpacing: 16,
              mainAxisSpacing: 16,
              itemCount: 3, // Adjust this count to reflect your number of items
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) {
                // Define the list of cards you want to display
                final cards = [
                  const CustomCard(
                    icon: Icons.security,
                    title: 'Security',
                    description:
                        'Top-notch security measures in every project.',
                  ),
                  const CustomCard(
                    icon: Icons.speed,
                    title: 'Performance',
                    description: 'Optimized for maximum performance.',
                  ),
                  const CustomCard(
                    icon: Icons.support,
                    title: 'Support',
                    description: '24/7 support for all our clients.',
                  ),
                ];

                return cards[index];
              },
            ),
          ],
        );
      },
    );
  }
}
