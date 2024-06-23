import 'package:astralhive_website/utils/constants.dart';
import 'package:flutter/material.dart';

class FooterSection extends StatelessWidget {
  const FooterSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16.0),
      color: backgroundColor,
      child: Text(
        '© 2024 Astral Hive Solutions. All rights reserved.',
        style: Theme.of(context).textTheme.bodyMedium,
        textAlign: TextAlign.center,
      ),
    );
  }
}
