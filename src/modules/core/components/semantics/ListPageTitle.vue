<template>
	<h1>
		<span>{{title}}</span>
		<el-button type="primary" icon="el-icon-edit" @click="$router.push({name: createRoute})"/>
	</h1>
</template>
<script>
  export default {
    name: 'ListPageTitle',
    props: {
      title: String,
      createRoute: String
    }
  }
</script>

<style scoped lang="scss">
	h1 {
		span {
			margin-right: 20px;
		}

		> * {
			vertical-align: middle;
		}
	}
</style>
