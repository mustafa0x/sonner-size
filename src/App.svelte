<Toaster richColors position="top-left"/>

<script>
import {Toaster, toast} from 'svelte-sonner'
setTimeout(() => {
  toast.success('Hello, world!')
}, 1000)
</script>
