
## Image-list-view

### Installation

With npm:

    npm i @team-decorate/image-list-view
    
### Command Examples

```html
<image-list-view
    :images="user.images">
</image-list-view>
      
      
<script>
    import CircleImageList from './components/CircleImageList'
    import  {ImageUploadable} from '@team-decorate/alcjs'

    export default {
        data() {
            return {
                list: [new ImageUploadable(), {path: '/image/usericon2.jpg'}],
            }
        },
        components: {
            CircleImageList
        }
    }

</script>

``` 

### props

|name|default|type|required|description|
|:---|:---|:---|:---|:---|
|images|null|Array|true||



