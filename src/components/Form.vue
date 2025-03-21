<script setup>
import {computed, reactive, ref} from "vue";
import {useFormStore} from "../store";

const store = useFormStore();
const isSubmitting = ref(false);

// Объект для хранения ошибок
const errors = reactive({
  fullNameError: false,
  birthDateError: false,
  phoneError: false,
  emailError: false
});

// Валидация ФИО (только буквы и пробелы)
const validateFullName = (event) => {
  store.formData.fullName = event.target.value.replace(/[^A-Za-zА-Яа-яЁё\s]/g, '').replace(/\s{2,}/g, ' ').trim();
  errors.fullNameError = !/^[A-Za-zА-Яа-яЁё]+(?:\s[A-Za-zА-Яа-яЁё]+){1,2}$/.test(store.formData.fullName)
}

// Валидация даты рождения
const validateBirthDate = () => errors.birthDateError = !store.formData.birthDate;

// Валидация телефона (10 цифр)
const validatePhone = () => errors.phoneError = !/^\+?\d+$/.test(store.formData.phone);


// Валидация email
const validateEmail = () => errors.emailError = !/\S+@\S+\.\S+/.test(store.formData.email);


const isValidDone = computed(() => {
		return (
    store.formData.fullName &&
    store.formData.birthDate &&
    store.formData.phone &&
    store.formData.email &&
    !errors.fullNameError &&
    !errors.birthDateError &&
    !errors.phoneError &&
    !errors.emailError
		)
})

// имитация отправки
const sendDataForm = () => {
   isSubmitting.value = true;


 setTimeout(()=>{
   store.saveData();

   isSubmitting.value = false
		 store.clearData();

 }, 2000)
}

</script>

<template>
		<div class="form-container">
				<form class="form" @submit.prevent>
						<div class="form__field-wrap">
								<input
												type="text"
												name="name"
												class="form__input"
												placeholder="ФИО"
												v-model="store.formData.fullName"
												@blur="validateFullName"
								>
								<span
												v-if="errors.fullNameError"
												class="form__error"
								>Только буквы, пробелы и 2-3 слова</span>
						</div>

						<div class="form__field-wrap">
								<input
												type="date"
												name="date"
												class="form__input"
												placeholder="Дата рождения"
												v-model="store.formData.birthDate"
												@blur="validateBirthDate"
								>
								<span
												class="form__error"
												v-if="errors.birthDateError"
								>Пожалуйста, заполните дату рождения</span>
						</div>

						<div class="form__field-wrap">
								<input
												type="text"
												name="phone"
												class="form__input"
												placeholder="Телефон"
												v-model="store.formData.phone"
												@blur="validatePhone"
								>
								<span
												class="form__error"
												v-if="errors.phoneError"
								>Некорректный формат телефона</span>
						</div>

						<div class="form__field-wrap">
								<input
												type="email"
												name="email"
												class="form__input"
												placeholder="Email"
												v-model="store.formData.email"
												@blur="validateEmail"
								>
								<span
												class="form__error"
												v-if="errors.emailError"
								>Некорректный email</span>
						</div>

						<button
										class="form__send-data"
										:disabled="!isValidDone"
										@click="sendDataForm"
						>
								<span
												v-if="!isSubmitting"
												class="button-text">Отправить</span>
								<span
												v-if="isSubmitting"
												class="spinner"></span>
						</button>
				</form>
				<div
								v-if="store.userExists"
								class="form__has-user"
				>Пользователь с такими данными уже существует.</div>
		</div>
</template>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    width: 350px;
    margin: auto;
    gap: 20px;
}

.form__field-wrap {
    position: relative;
}

.form__input {
    width: 100%;
    padding: 15px;
    border: 3px solid #ccc;
    font-size: 16px;
    outline: none;
    transition: 0.3s;
}

.form__input:focus {
    border-color: #000;
}


.form__error {
    position: absolute;
    left: 0;
    bottom: -18px;
    color: red;
    font-size: 12px;
    margin-top: 5px;
}

.form__has-user {
    margin: 10px 0 0 0;
    color: red;
}

.form__send-data {
    position: relative;
    margin: 10px 0 0 0;
    padding: 10px 20px;
    height: 42px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    background: #cee7ce;
    outline: none;
}

.form__send-data:hover {
    background: #94d392;
}

.form__send-data:active {
    background: #8ed08c;
    outline: none;
}

.form__send-data, .form__input {
    border-radius: 10px;
}

.form__send-data[disabled] {
    background: #ededed;
    cursor: not-allowed;
}

.spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border: 3px solid #858181;
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
}

@keyframes spin {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>