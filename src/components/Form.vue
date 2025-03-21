<script setup>
</script>

<template>
	<div class="form-container">
			<form class="form">
					<div class="form__field-wrap">
							<input type="text" class="form__input" placeholder="ФИО">
							<span class="form__error">Пожалуйста, заполните поле</span>
					</div>

					<div class="form__field-wrap">
							<input type="date" class="form__input" placeholder="Дата рождения">
							<span class="form__error">Пожалуйста, заполните поле</span>
					</div>

					<div class="form__field-wrap">
							<input type="number" class="form__input" placeholder="Телефон">
							<span class="form__error">Некорректный телефон</span>
					</div>

					<div class="form__field-wrap">
							<input type="email" class="form__input" placeholder="Email">
							<span class="form__error">Некорректный email</span>
					</div>

					<button class="form__send-data" disabled>
							<span class="button-text">Отправить</span>
							<span style="display: none;" class="spinner"></span>
					</button>
			</form>
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

.error {
    border-color: red
}

.form__error {
    display: none;
				position: absolute;
    left: 0;
				bottom: -18px;
    color: red;
    font-size: 12px;
    margin-top: 5px;
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

/*.loading-button.loading .button-text {*/
/*    opacity: 0;*/
/*}*/

/*.loading-button.loading .spinner {*/
/*    opacity: 1;*/
/*}*/

</style>