<!-- 作品详情页-头部图片 -->
<script>
export default {
	props: ['projectImages', 'clickProjectSingle'],
	
	// data: () => {
	// 	return {
	// 		selectedItemIndex: 1,
    //   showItem: true
	// 	}
	// }
			
		
};
</script>

<template>
	

	<!-- <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="projectImage in projectImages"
			:key="projectImage.id"
		>
			<img
				:src="projectImage.img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}"
			/>
		</div>
	</div> -->

	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-if="projectImages && projectImages[clickProjectSingle]"
			:key="projectImages[clickProjectSingle].id"
		>
			<img
				:src="projectImages[clickProjectSingle].img"
				class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImages[clickProjectSingle].title }}"
			/>
		</div>
	</div>
</template>
