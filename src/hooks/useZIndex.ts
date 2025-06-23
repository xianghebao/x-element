import {computed, ref} from 'vue'

const zIndex = ref(0)

const useZIndex = (initiaValue=2000)=>{
  const initialZIndex = ref(initiaValue)
  const currentZIndex = computed(()=>zIndex.value +initialZIndex.value)
  const nextZIndex = ()=>{
    zIndex.value ++
    return currentZIndex.value
  }
  return {
    currentZIndex,
    nextZIndex,
    initialZIndex
  }
}

export default useZIndex
