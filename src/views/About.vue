<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button>按钮测试</Button>
  </div>
</template>

<script>
  import Button from 'vant/lib/button';
  import 'vant/lib/vant-css/base.css';
  import 'vant/lib/vant-css/button.css';

  export default {
    name: 'about',
    components: {
      Button,
    },
  };
</script>
