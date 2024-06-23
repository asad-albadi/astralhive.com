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

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final ValueNotifier<bool> _isAppBarVisible = ValueNotifier(false);
  final GlobalKey _headerKey = GlobalKey();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          NotificationListener<ScrollNotification>(
            onNotification: (scrollNotification) {
              if (scrollNotification.metrics.axis == Axis.vertical) {
                final RenderBox renderBox =
                    _headerKey.currentContext?.findRenderObject() as RenderBox;
                final position = renderBox.localToGlobal(Offset.zero).dy;
                if (position < 0 && !_isAppBarVisible.value) {
                  _isAppBarVisible.value = true;
                } else if (position >= 0 && _isAppBarVisible.value) {
                  _isAppBarVisible.value = false;
                }
              }
              return true;
            },
            child: LayoutBuilder(
              builder: (context, constraints) {
                return Center(
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 1200),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Expanded(
                          child: SingleChildScrollView(
                            padding: const EdgeInsets.all(16.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                HeaderSection(key: _headerKey),
                                const SizedBox(height: 48),
                                const IntroSection(),
                                const SizedBox(height: 48),
                                const HighlightsSection(),
                                const SizedBox(height: 48),
                                const ServicesSection(),
                                const SizedBox(height: 48),
                                const ProjectsSection(),
                                const SizedBox(height: 48),
                                const TestimonialsSection(),
                                const SizedBox(height: 48),
                                const ContactSection(),
                                const SizedBox(height: 48),
                              ],
                            ),
                          ),
                        ),
                        const FooterSection(),
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          ValueListenableBuilder<bool>(
            valueListenable: _isAppBarVisible,
            builder: (context, isVisible, child) {
              return AnimatedPositioned(
                duration: const Duration(milliseconds: 200),
                top: isVisible ? 0 : -kToolbarHeight,
                left: 0,
                right: 0,
                child: child ?? SizedBox.shrink(),
              );
            },
            child: AppBar(
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
          ),
        ],
      ),
    );
  }
}
