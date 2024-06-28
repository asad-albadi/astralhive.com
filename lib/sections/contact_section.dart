import 'package:astralhive_website/utils/constants.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        SelectableText(
          'Contact Us',
          style: Theme.of(context).textTheme.headlineSmall,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 8),
        SelectableText(
          'We would love to hear from you. Connect with us on social media!',
          style: Theme.of(context).textTheme.titleMedium,
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 16),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
              ),
              child: Material(
                color: Colors.transparent,
                shape: const CircleBorder(),
                child: InkWell(
                  splashColor: Colors.black,
                  onTap: () {
                    const url = 'https://linktr.ee/astralhive';
                    launchURL(url);
                  },
                  customBorder: const CircleBorder(),
                  child: Ink(
                    decoration: const BoxDecoration(shape: BoxShape.circle),
                    height: 50,
                    width: 50,
                    child: const Icon(FontAwesomeIcons.instagram,
                        color: errorColor, size: 36),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 16),
            Container(
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
              ),
              child: Material(
                color: Colors.transparent,
                shape: const CircleBorder(),
                child: InkWell(
                  splashColor: Colors.black,
                  onTap: () {
                    const url = 'https://linktr.ee/astralhive';
                    launchURL(url);
                  },
                  customBorder: const CircleBorder(),
                  child: Ink(
                    decoration: const BoxDecoration(shape: BoxShape.circle),
                    height: 50,
                    width: 50,
                    child: const Icon(FontAwesomeIcons.whatsapp,
                        color: successColor, size: 36),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 16),
            Container(
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
              ),
              child: Material(
                color: Colors.transparent,
                shape: const CircleBorder(),
                child: InkWell(
                  splashColor: Colors.black,
                  onTap: () {
                    const url = 'https://linktr.ee/astralhive';
                    launchURL(url);
                  },
                  customBorder: const CircleBorder(),
                  child: Ink(
                    decoration: const BoxDecoration(shape: BoxShape.circle),
                    height: 50,
                    width: 50,
                    child: const Icon(FontAwesomeIcons.twitter,
                        color: infoColor, size: 36),
                  ),
                ),
              ),
            ),
            const SizedBox(width: 16),
          ],
        ),
      ],
    );
  }
}
