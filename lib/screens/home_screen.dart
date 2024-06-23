import 'package:astralhive_website/sections/contact_section.dart';
import 'package:astralhive_website/sections/header_section.dart';
import 'package:astralhive_website/sections/highlights_section.dart';
import 'package:astralhive_website/sections/intro_section.dart';
import 'package:astralhive_website/sections/projects_section.dart';
import 'package:astralhive_website/sections/services_section.dart';
import 'package:astralhive_website/sections/testimonials_section.dart';
import 'package:astralhive_website/utils/constants.dart';
import 'package:astralhive_website/widgets/footer_section.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        title: Row(
          children: [
            SvgPicture.asset(
              'assets/vectors/code.svg', // Path to your SVG logo
              height: 50,
              color: foregroundColor,
            ),
            const SizedBox(width: 8),
            const Text('Astral Hive Solutions'),
          ],
        ),
        backgroundColor: backgroundColor,
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          return Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 1200),
              child: const Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Expanded(
                    child: SingleChildScrollView(
                      padding: EdgeInsets.all(16.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          HeaderSection(),
                          SizedBox(height: 48),
                          IntroSection(),
                          SizedBox(height: 48),
                          HighlightsSection(),
                          SizedBox(height: 48),
                          ServicesSection(),
                          SizedBox(height: 48),
                          ProjectsSection(),
                          SizedBox(height: 48),
                          TestimonialsSection(),
                          SizedBox(height: 48),
                          ContactSection(),
                          SizedBox(height: 48),
                        ],
                      ),
                    ),
                  ),
                  FooterSection(),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
