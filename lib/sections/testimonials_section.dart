import 'package:astralhive_website/widgets/custom_card.dart';
import 'package:flutter/material.dart';

class TestimonialsSection extends StatelessWidget {
  const TestimonialsSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Visibility(
      visible: false,
      child: LayoutBuilder(
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
            childAspectRatio = 2.4;
          }

          return Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(
                'Testimonials',
                style: Theme.of(context).textTheme.headlineSmall,
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 8),
              Text(
                'Here’s what our clients have to say about us.',
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
                    title: 'Client One',
                    description: 'Feedback from Client One.',
                  ),
                  CustomCard(
                    title: 'Client Two',
                    description: 'Feedback from Client Two.',
                  ),
                  CustomCard(
                    title: 'Client Three',
                    description: 'Feedback from Client Three.',
                  ),
                  CustomCard(
                    title: 'Client Four',
                    description: 'Feedback from Client Four.',
                  ),
                ],
              ),
            ],
          );
        },
      ),
    );
  }
}
