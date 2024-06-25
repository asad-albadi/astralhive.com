import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});

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
            Text(
              'Our Services',
              style: Theme.of(context).textTheme.headlineSmall,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
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
                    icon: FontAwesomeIcons.laptopCode,
                    title: 'Cross-Platform Apps',
                    description:
                        'High-performance applications for Windows, Linux, Android, and the web.',
                  ),
                  const CustomCard(
                    icon: FontAwesomeIcons.gear,
                    title: 'Automation',
                    description:
                        'Streamline your processes with custom automation solutions.',
                  ),
                  const CustomCard(
                    icon: FontAwesomeIcons.networkWired,
                    title: 'Comprehensive Systems',
                    description:
                        'Comprehensive solutions for PoS, management systems, and other integrated services.',
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
