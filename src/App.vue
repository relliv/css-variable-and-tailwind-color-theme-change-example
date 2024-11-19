<template>
  <div class="flex flex-col gap-2 w-full p-4">
    <h1 class="text-2xl mb-5 text-center">
      css variable and tailwind color theme change
    </h1>
    <div class="bg-nx-theme-50 p-2 border border-gray-500">
      My Theme Color: 50
    </div>
    <div class="bg-nx-theme-100 p-2 border border-gray-500">
      My Theme Color: 100
    </div>
    <div class="bg-nx-theme-200 p-2 border border-gray-500">
      My Theme Color: 200
    </div>
    <div class="bg-nx-theme-300 p-2 border border-gray-500">
      My Theme Color: 300
    </div>
    <div class="bg-nx-theme-400 p-2 border border-gray-500">
      My Theme Color: 400
    </div>
    <div class="bg-nx-theme-500 p-2 border border-gray-500">
      My Theme Color: 500
    </div>
    <div class="bg-nx-theme-600 p-2 border border-gray-500 text-white">
      My Theme Color: 600
    </div>
    <div class="bg-nx-theme-700 p-2 border border-gray-500 text-white">
      My Theme Color: 700
    </div>
    <div class="bg-nx-theme-800 p-2 border border-gray-500 text-white">
      My Theme Color: 800
    </div>
    <div class="bg-nx-theme-900 p-2 border border-gray-500 text-white">
      My Theme Color: 900
    </div>
    <div class="bg-nx-theme-950 p-2 border border-gray-500 text-white">
      My Theme Color: 950
    </div>

    <p class="text-nx-theme-500">Pick a color and see the magic 🪄</p>

    <color-picker
      :isWidget="true"
      pickerType="fk"
      format="hex"
      @pureColorChange="onPureColorChange($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { tailwindcssPaletteGenerator } from '@bobthered/tailwindcss-palette-generator';

const onPureColorChange = (event) => {
  const root = document.documentElement;

  const newPalette = tailwindcssPaletteGenerator({
    colors: [event],
    names: ['palette'],
  });

  // --nx-theme variables defined in style.scss
  Object.entries(newPalette['palette']).forEach(([key, value]: any) => {
    root.style.setProperty(`--nx-theme-${key}`, value);
  });
};
</script>
