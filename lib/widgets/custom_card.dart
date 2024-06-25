import 'package:astralhive_website/utils/constants.dart';
import 'package:flutter/material.dart';

class CustomCard extends StatelessWidget {
  final IconData? icon;
  final String? imagePath;
  final String title;
  final String description;
  final VoidCallback? onPressed;

  const CustomCard({
    super.key,
    this.icon,
    this.imagePath,
    required this.title,
    required this.description,
    this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return Card(
          color: backgroundColor2,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (icon != null)
                  Icon(
                    icon,
                    size: 36,
                    color: primaryColor,
                  )
                else if (imagePath != null)
                  ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: Image.asset(
                      imagePath!,
                      height: 100,
                      width: double.infinity,
                      fit: BoxFit.fitHeight,
                    ),
                  ),
                const SizedBox(height: 8),
                Text(
                  title,
                  style: Theme.of(context).textTheme.titleLarge?.copyWith(
                        fontWeight: FontWeight.bold,
                      ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                Text(
                  description,
                  style: Theme.of(context).textTheme.bodyMedium,
                  textAlign: TextAlign.center,
                ),
                if (onPressed != null)
                  const SizedBox(
                    height: 10,
                  ),
                if (onPressed != null)
                  GestureDetector(
                    onTap: onPressed,
                    child: Image.asset(
                      'assets/images/Google-Play-Store-Button.png',
                      height: 50,
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}
