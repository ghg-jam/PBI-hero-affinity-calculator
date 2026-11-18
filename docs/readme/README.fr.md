# 💖 Calculateur de Niveau d’Affinité du Héros

[English](../../README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Español](README.es.md) | **Français** | [Deutsch](README.de.md) | [Português](README.pt.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

Un calculateur web gratuit pour **Pixel Brave Idle** : saisissez les cadeaux que vous possédez, choisissez les récompenses d’affinité visées et obtenez le nombre minimal de cadeaux nécessaires pour chaque type.

Fonctionne entièrement dans votre navigateur. Pas de compte, pas de serveur, rien n’est envoyé.

**Utiliser en ligne:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> Outil non officiel créé par des fans. Non affilié au développeur du jeu et non approuvé par lui.

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## Fonctionnalités

- Compteur de cadeaux pour les trois niveaux (vert / violet / or) avec favoris.
- Objectifs de récompense : listes de paliers intégrées, objectifs personnalisés et objectif final.
- Plusieurs combos (plans), chacun avec sa règle d’équilibre : quelle couleur en a le plus, et un écart maintenu **dans une plage** (avec des préréglages comme 0–25 ou 0–200), le **plus grand** possible ou le **plus petit** possible.
- Planification à partir de l’affinité actuelle : estime les cadeaux déjà utilisés et ne calcule que les paliers restants.
- Résultats : réussites exactes, excédent et déficit par palier, cadeaux nécessaires par étape (avec les icônes des cadeaux utilisés), graphique d’écart et barres de progression. Les résultats ne changent que lorsque vous appuyez sur **Calculer tous les combos**, et une barre signale quand ils ne sont plus à jour.
- Options avancées (masquées par défaut) : début de la limite d’écart, limite de « points maximum au-dessus de l’objectif », cadeaux non favoris, limite totale par couleur, limites par cadeau (effaçables d’un geste) et ordre de dépense personnalisé.
- Remplissage par IA : copiez le prompt, envoyez-le avec une capture à un **nouveau** chat IA, puis collez la réponse JSON (ou importez-la depuis un fichier). L’IA peut mal lire les nombres : vérifiez toujours avec votre jeu. Aussi : sauvegarde/chargement, 18 langues, mode clair/sombre et 11 thèmes de couleur.

## Utilisation

1. **Cadeaux** : saisissez la quantité de chacun et marquez le favori avec l’étoile.
2. **Objectifs** : indiquez l’affinité actuelle (facultatif) et cochez les listes de récompenses.
3. **Combos** : gardez les valeurs par défaut ou choisissez la règle d’écart (plage, plus grand ou plus petit) et ouvrez *Paramètres avancés*.
4. **Résultats** : appuyez sur **Calculer tous les combos**, puis lisez combien de cadeaux de chaque sorte utiliser.

## Exécuter en local

- Téléchargez `download/combo_calculator_single.html` et double-cliquez dessus.
- Ou téléchargez tout le dépôt, gardez les dossiers `css`, `js` et `lang` à côté de `index.html`, puis ouvrez `index.html`.

## Déployer sur GitHub Pages

1. Téléversez **tout le contenu** du dossier à la racine du dépôt (en gardant les dossiers).
2. Dans **Settings → Pages**, choisissez la branche main et le dossier racine.
3. Après une mise à jour, actualisez sans cache (Ctrl/Cmd + Maj + R).

## Informations pour les développeurs

La structure du projet, la contribution aux traductions et l’historique des changements se trouvent dans le [README en anglais](../../README.md).

## Licence

Licence MIT (code uniquement).
