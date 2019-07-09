<template>
    <div class="image-list-view">
        <div>
            <img
                    :src="imagePath">
        </div>
    </div>
</template>

<script>
    import  ImageUploadable from '../models/Parents/ImageUploadable'
    import linq from 'linq'

    export default {
        name: 'image-list-view',
        data() {
            return {
                imagePath: ''
            }
        },
        props: {
            images: {
                type: Array,
                required:true
            },
            contain: {
                type: Boolean
            }
        },
        created() {
            linq.from(this.images).select(x => {
                if(x instanceof ImageUploadable){
                    return x
                }
                const i = new ImageUploadable()
                i.data = x
                return i
            })
                .select((x,i) => {
                    if(i === 0) {
                        x.active = true
                        this.imagePath = x.path
                    } else {
                        x.active = false
                    }
                    return x
                })
                .select((x, i) => this.images[i] = x) //this.images.splice(i, 1, x))
                .toArray()
        },

        methods: {
        },

        watch: {
            images: {
                handler($n, $o) {
                    const tmp = $n.slice()
                    linq.from(tmp).forEach(x => {
                        if(x.active === true) {
                            this.imagePath = x.path
                        }
                    })
                },
                deep: true
            }
        },

    }
</script>

<style>
    .image-list-view img {
        width: 100%;
        height: 100%;
    }
</style>