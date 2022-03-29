<template>
		<div class="card">
			<h2>{{ card.name }}</h2>
      <span>{{ card.description }}</span>
			<img :src="card.image" alt="Photo of a Shiba Inu"/>
		</div>
</template>

<script>
export default {
	props: {
    card: {
			type: Object,
			required: true
		}
	},
};
</script>

<style>
.card {
	width: 320px;
	height: auto;
	min-height: 450px;
	background: rgb(60, 62, 68);
	border-radius: 20px;
	overflow: hidden;
	padding: 10px 15px;
	margin-bottom: 24px;
	margin-right: 10px;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
}
img {
	margin-top: 5%;
  max-width: 100%;
  height: auto;
}
.card:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.card > .title {
	margin: 0;
}
</style>
