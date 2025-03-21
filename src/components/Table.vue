<script setup>
import {computed, onMounted, ref} from "vue";
import {useFormStore} from "../store";

// Используем store для получения данных пользователей
const store = useFormStore();

// Следим за изменениями в usersData с помощью computed
const usersData = computed(() => store.usersData);


</script>

<template>
		<div class="table-container">
				<table class="data-table">
						<thead>
						<tr>
								<th>ФИО</th>
								<th>Дата рождения</th>
								<th>Телефон</th>
								<th>Email</th>
								<th>Удалить</th>
						</tr>
						</thead>
						<tbody>
						<tr
								v-for="user in usersData"
								:key="user.id"
						>
								<td>{{ user.fullName }}</td>
								<td>{{ user.birthDate }}</td>
								<td>{{ user.phone }}</td>
								<td>{{ user.email }}</td>
								<td>
										<button>Удалить</button>
								</td>
						</tr>
						</tbody>
				</table>
		</div>
</template>


<style scoped>
.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.data-table th, .data-table td {
    width: 25%;
    border: 1px solid #ddd;
    padding: 8px;
}

.data-table th {
    background-color: #f4f4f4;
}
</style>
