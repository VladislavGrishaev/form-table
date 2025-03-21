<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const activeTab = computed(() => route?.path || '');
</script>

<template>
		<div class="tabs">
				<router-link
								to="/form"
								:class="{active: activeTab === '/form'}"
								class="tabs__item-tab"
				>Форма</router-link>

				<router-link
								to="/table"
								:class="{active: activeTab === '/table'}"
								class="tabs__item-tab"
				>Данные</router-link>
		</div>
</template>
