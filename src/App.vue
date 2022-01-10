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
								displayContent: `
									<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="11px" class="VSTEdit__icon">
										<g>
											<path d="M106.667,0H21.333C9.551,0,0,9.551,0,21.333v85.333C0,118.449,9.551,128,21.333,128h85.333
												c11.782,0,21.333-9.551,21.333-21.333V21.333C128,9.551,118.449,0,106.667,0z M85.333,85.333H42.667V42.667h42.667V85.333z"/>
											<path d="M106.667,384H21.333C9.551,384,0,393.551,0,405.333v85.333C0,502.449,9.551,512,21.333,512h85.333
												c11.782,0,21.333-9.551,21.333-21.333v-85.333C128,393.551,118.449,384,106.667,384z M85.333,469.333H42.667v-42.667h42.667
												V469.333z"/>
											<path d="M490.667,0h-85.333C393.551,0,384,9.551,384,21.333v85.333c0,11.782,9.551,21.333,21.333,21.333h85.333
												c11.782,0,21.333-9.551,21.333-21.333V21.333C512,9.551,502.449,0,490.667,0z M469.333,85.333h-42.667V42.667h42.667V85.333z"/>
											<path d="M490.667,384h-85.333C393.536,384,384,393.557,384,405.333v85.333c0,11.776,9.536,21.333,21.333,21.333h85.333
												c11.797,0,21.333-9.557,21.333-21.333v-85.333C512,393.557,502.464,384,490.667,384z"/>
											<path d="M256,42.667c-11.776,0-21.333,9.557-21.333,21.333S244.224,85.333,256,85.333S277.333,75.776,277.333,64
												S267.776,42.667,256,42.667z"/>
											<path d="M170.667,42.667c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333S192,75.776,192,64
												S182.443,42.667,170.667,42.667z"/>
											<path d="M341.333,42.667C329.557,42.667,320,52.224,320,64s9.557,21.333,21.333,21.333c11.776,0,21.333-9.557,21.333-21.333
												S353.109,42.667,341.333,42.667z"/>
											<path d="M256,426.667c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333
												S267.776,426.667,256,426.667z"/>
											<path d="M64,277.333c11.776,0,21.333-9.557,21.333-21.333S75.776,234.667,64,234.667S42.667,244.224,42.667,256
												S52.224,277.333,64,277.333z"/>
											<path d="M64,362.667c11.776,0,21.333-9.557,21.333-21.333C85.333,329.557,75.776,320,64,320s-21.333,9.557-21.333,21.333
												C42.667,353.109,52.224,362.667,64,362.667z"/>
											<path d="M64,192c11.776,0,21.333-9.557,21.333-21.333S75.776,149.333,64,149.333s-21.333,9.557-21.333,21.333S52.224,192,64,192z
												"/>
											<path d="M448,277.333c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333
												S436.224,277.333,448,277.333z"/>
											<path d="M448,362.667c11.776,0,21.333-9.557,21.333-21.333c0-11.776-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333
												C426.667,353.109,436.224,362.667,448,362.667z"/>
											<path d="M448,192c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333
												S436.224,192,448,192z"/>
											<path d="M170.667,426.667c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333S192,459.776,192,448
												S182.443,426.667,170.667,426.667z"/>
											<path d="M341.333,426.667C329.557,426.667,320,436.224,320,448s9.557,21.333,21.333,21.333c11.776,0,21.333-9.557,21.333-21.333
												S353.109,426.667,341.333,426.667z"/>
										</g>
									</svg>
								`, 
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
								displayContent: `
									<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										viewBox="0 0 301.691 301.691" style="enable-background:new 0 0 301.691 301.691;" xml:space="preserve" height="11px" class="VSTEdit__icon">
										<g>
											<polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0 	"/>
											<rect x="130.563" y="261.168" width="40.525" height="40.523"/>
										</g>
									</svg>
								`, 
								action(editorState, insertFunction, wrappingFunction) { 
									const wrappingFunctionResult = wrappingFunction()

									if(wrappingFunctionResult == null) {
										insertFunction(editorState.targetElement, `<div class='user-important-notice'><p>Введіть свій текст</p></div>`)
									} else {
										const block = document.createElement("div")

										block.classList.add('user-important-notice')
										wrappingFunctionResult.append(block, wrappingFunctionResult.selectedText)
									}
								}
							},
							{
								name: 'selected_text', 
								title: "Selected text", 
								displayContent: `
									<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve" height='11px' class="VSTEdit__icon">
										<g>
											<path d="M0,0.5v59h60v-59H0z M50,15.5c0,1.654-1.346,3-3,3s-3-1.346-3-3H33v30h2c1.654,0,3,1.346,3,3s-1.346,3-3,3H25
												c-1.654,0-3-1.346-3-3s1.346-3,3-3h2v-30H16c0,1.654-1.346,3-3,3s-3-1.346-3-3v-3.145c0-1.574,1.281-2.855,2.855-2.855h34.289
												C48.719,9.5,50,10.781,50,12.355V15.5z"/>
										</g>
									</svg>
								`, 
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
								displayContent: `
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252.422 252.422" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 252.422 252.422" height='11px' class="VSTEdit__icon">
										<g>
											<path d="m251.692,73.198l-16-32.243c-1.182-2.382-3.611-3.889-6.271-3.889h-205.421c-2.597,0-4.98,1.438-6.192,3.735l-17,32.243c-1.144,2.17-1.068,4.78 0.198,6.88 1.267,2.102 3.541,3.385 5.994,3.385h19.849v125.046c0,3.866 3.134,7 7,7h184.725c3.866,0 7-3.134 7-7v-125.046h19.849c2.422,0 4.673-1.252 5.949-3.311s1.397-4.63 0.32-6.8zm-53.996-22.132l8.262,18.243h-160.21l7.304-18.243h144.644zm-169.473,0h9.748l-7.304,18.243h-12.063l9.619-18.243zm183.35,150.289h-170.724v-118.046h170.725v118.046zm9.753-132.046l-8.261-18.243h12.015l9.053,18.243h-12.807z"/>
										</g>
									</svg>
								`, 
								action(editorState, insertFunction, wrappingFunction) { 
									const wrappingFunctionResult = wrappingFunction()

									if(wrappingFunctionResult == null) {
										insertFunction(editorState.targetElement, "<div class='user-con'>Image here</div>")
									} else {
										const block = document.createElement("div")
										block.classList.add('user-con')
										wrappingFunctionResult.append(block, wrappingFunctionResult.selectedText)
									}
								}
							}
						]
					}
				]
			}
		}
	}
</script>

