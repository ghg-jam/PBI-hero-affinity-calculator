# 💖 Calculadora de Nivel de Afinidad del Héroe

[English](../../README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | **Español** | [Français](README.fr.md) | [Deutsch](README.de.md) | [Português](README.pt.md) | [Tiếng Việt](README.vi.md) | [ไทย](README.th.md) | [Bahasa Indonesia](README.id.md) | [Русский](README.ru.md) | [Türkçe](README.tr.md) | [Italiano](README.it.md) | [Polski](README.pl.md) | [العربية](README.ar.md) | [Filipino](README.fil.md)

Una calculadora web gratuita para **Pixel Brave Idle**: introduce los regalos que tienes, elige las recompensas de afinidad que buscas y calcula cuántos regalos de cada tipo necesitas como mínimo.

Funciona totalmente en tu navegador. Sin cuenta, sin servidor y sin subir nada.

**Usar en línea:** https://ghg-jam.github.io/PBI-hero-affinity-calculator/

> Herramienta no oficial hecha por fans. No está afiliada ni respaldada por el desarrollador del juego.

<p>
  <img src="../phone-gifts.png" width="240">
  <img src="../phone-results.png" width="240">
</p>

## Características

- Contador de regalos de los tres niveles (verde / morado / dorado) con favoritos.
- Objetivos de recompensa: listas de hitos integradas, objetivos personalizados y meta final.
- Varios combos (planes), cada uno con su regla de equilibrio de regalos: qué color tiene más y una diferencia que se mantiene **dentro de un rango** (con atajos como 0–25 o 0–200), lo **más grande** posible o lo **más pequeña** posible.
- Planificación desde la afinidad actual: estima los regalos ya usados y calcula solo los hitos que faltan.
- Resultados: aciertos exactos, exceso y déficit por hito, regalos necesarios por etapa (con iconos de los regalos usados), gráfico de diferencia y barras de progreso. Los resultados solo cambian al pulsar **Calcular todos los combos** y una barra avisa cuando están desactualizados.
- Opciones avanzadas (ocultas por defecto): desde dónde empieza el límite de diferencia, un límite de «puntos máximos sobre el objetivo», regalos no favoritos, un límite total por color, límites por regalo (con borrado de todos de un toque) y un orden de gasto personalizado.
- Relleno con IA: copia el prompt, envíalo con una captura a un chat de IA **nuevo** y pega la respuesta JSON (o impórtala desde un archivo). La IA puede leer mal los números: compruébalo siempre con tu juego. También: guardar/cargar datos, 18 idiomas, modo claro/oscuro y 11 temas de color.

## Cómo se usa

1. **Regalos**: introduce cuántos tienes de cada uno y marca el favorito con la estrella.
2. **Objetivos**: indica tu afinidad actual (opcional) y marca las listas de recompensas.
3. **Combos**: deja los valores por defecto o elige la regla de diferencia (rango, mayor o menor) y abre *Ajustes avanzados*.
4. **Resultados**: pulsa **Calcular todos los combos** y mira cuántos regalos de cada tipo usar.

## Ejecutar en local

- Descarga `download/combo_calculator_single.html` y haz doble clic.
- O descarga todo el repositorio, mantén las carpetas `css`, `js` y `lang` junto a `index.html` y abre `index.html`.

## Publicar en GitHub Pages

1. Sube **todo el contenido** de la carpeta a la raíz del repositorio (manteniendo las carpetas).
2. En **Settings → Pages**, elige la rama main y la carpeta raíz.
3. Tras actualizar, recarga con fuerza (Ctrl/Cmd + Shift + R).

## Información para desarrolladores

La estructura del proyecto, cómo contribuir con traducciones y el registro de cambios están en el [README en inglés](../../README.md).

## Licencia

Licencia MIT (solo el código).
