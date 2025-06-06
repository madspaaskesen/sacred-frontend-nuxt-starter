<!-- componoents/ThemeSwitcher.vue -->
<template>
  <div class="fixed bottom-4 left-4 text-sm z-50">
    <div class="relative">
      <button
        @click="toggleOpen"
        class="bg-base-300 flex items-center space-x-2 backdrop-blur px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition"
      >
        <span>🌸 Theme</span>
        <svg
          :class="[
            'w-4 h-4 transition-transform duration-300',
            open ? 'rotate-180' : 'rotate-0'
          ]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <transition name="fade">
        <div
          v-if="open"
          class="fixed bottom-14 left-4 mt-2 w-60 bg-base-300 border-1 rounded-xl shadow-xl p-3"
        >
          <label 
            v-for="theme in themes" 
            :key="theme.value" 
            :data-theme-disabled="''"
            class="flex items-center space-x-2 cursor-pointer hover:bg-base-200 p-1 hover:text-primary"
          >
            <input
              type="radio"
              name="theme"
              :value="theme.value"
              v-model="selectedTheme"
              @change="changeTheme"
              class="radio radio-primary radio-xs form-radio"
            />
            <span>{{ theme.label }}</span>
          </label>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
const selectedTheme = ref('lemonade') // light, dark, etc...
const themes = ref([
  { label: '🕊️ Sacred', value: 'lemonade' },  
  { label: '☀️ Light', value: 'light' },
  { label: '🌿 Forest light', value: 'emerald' },
  { label: '🧞 Fantasy', value: 'fantasy' },
  { label: '🧁 cupcake', value: 'cupcake' },
  { label: '💝 valentine', value: 'valentine' },
  { label: '🌙 MIdnight prayer', value: 'synthwave' },
  { label: '🌑 Night time', value: 'dark' }
])

const toggleOpen = () => {
  open.value = !open.value
}

const changeTheme = () => {
  document.documentElement.setAttribute('data-theme', selectedTheme.value)
  localStorage.setItem('theme', selectedTheme.value)
  open.value = false
}

onMounted(() => {
  const saved = import.meta.server ? 'lemonade' : localStorage.getItem('theme') || 'lemonade';
  if (saved) {
    selectedTheme.value = saved
    changeTheme()
    setTimeout(() => {
      changeTheme() // fix for hard reloards or hard url navigation without NuxtLink etc.
    },1)
  }
})
</script>
