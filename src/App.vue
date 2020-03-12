<template>
    <div id="app">
        <vue-s-input :options="options"></vue-s-input>
    </div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {
				options: {
					id: 'article id',
					owner: 'Your GitHub ID',
					repo: 'The repo to store comments',
					oauth: {
						client_id: 'Your client ID',
						client_secret: 'Your client secret',
					}
				}
			}
		}
	}
</script>

<style lang="scss">
    @import '~gitment/style/default.css';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
