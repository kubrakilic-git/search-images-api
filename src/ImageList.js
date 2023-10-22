import ImageItem from "./ImageItem";

function ImageList({imagesurl}){

    return(
        <div className="imagelist">
            { imagesurl.map((image,index)=>{
                return   <ImageItem key={index} img={image}></ImageItem>
            }) }  
        </div>
    );

}

export default ImageList