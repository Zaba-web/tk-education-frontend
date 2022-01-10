<template>
	<transition name="fade" mode="out-in">
		<router-view></router-view>
	</transition>
</template>

<style lang="sass">
.fade-enter-from, .fade-leave-to
	opacity: 0
.fade-enter-active, .fade-leave-active
	transition: opacity .7s ease-in
</style>

<script>
	module.exports = {
		mounted(){
			document.title = "Виробниче навчання | Веб розробка"
		},
		provide: {
			customSettings: {
				editorSettings: {
					imageLoadHandler: 'http://127.0.0.1:8000/api/upload/image',
				},
				tools: [
					{
						name: 'Виділення тексту',
						tools: [
							{
								name: 'select_box', 
								title: "Select box", 
								displayContent: "| s |", 
								action(editorState, insertFunction, wrappingFunction) { 
								const wrappingFunctionResult = wrappingFunction()

								if(wrappingFunctionResult == null) {
									insertFunction(editorState.targetElement, "<div class='user-selected-box'><p>Введіть свій текст</p></div>")
								} else {
									const block = document.createElement("div")

									block.classList.add('user-selected-box')
									wrappingFunctionResult.append(block, wrappingFunctionResult.selectedText)
								}
							}
							},
							{
								name: 'important_text', 
								title: "Important text", 
								displayContent: "!", 
								action(editorState, insertFunction) { 
									insertFunction(editorState.targetElement, `<div class='user-important-notice'><p>Введіть свій текст</p></div>`)
								}
							},
							{
								name: 'selected_text', 
								title: "Selected text", 
								displayContent: "s", 
								action(editorState, insertFunction, wrappingFunction) { 
									const wrappingFunctionResult = wrappingFunction()

									if(wrappingFunctionResult == null) {
										insertFunction(editorState.targetElement, "<strong class='user-text-selected'>Введіть свій текст</strong>")
									} else {
										const strong = document.createElement("strong")
										strong.classList.add('user-text-selected')
										wrappingFunctionResult.append(strong, wrappingFunctionResult.selectedText)
									}
								}
							},
							{
								name: 'img_container', 
								title: "Image container", 
								displayContent: "[img]", 
								action(editorState, insertFunction) { 
										insertFunction(editorState.targetElement, "<div class='user-con'>Image here</div>")
								}
							}
						]
					}
				]
			}
		}
	}
</script>

