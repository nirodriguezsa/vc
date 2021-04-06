# Image and video processing


Conversión a escala de grises
Antiguamente las imágenes estaban solamente presentadas en escalas de grises, en estas imágenes las formas se podían distinguir por su luminosidad. En algunos casos se podía distinguir si los objetos eran de diferentes colores cuando estos tenían “grises” diferentes. Ahora con la aparición, y uso, del RGB (por sus siglas en inglés de red, green, blue) o RVA, en español, se hace uso del modelo aditivo de la luz para simular la mayoría de los colores visibles.
Aunque pasar de un modelo RGB a una escala de grises es poco común, esto es posible hacerlo gracias a distintos métodos de conversión, entre ellos están el promedio de RGB y luma
El promedio RGB, como lo indica su nombre, solo hace uso del promedio de los valores en la escala RGB para calcular la luminosidad del píxel y de esta manera transformarlo a escala de grises.


Wolverine image original

> :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/imgorigin.js, width=604, height=340

Wolverine image processed with P5 to obtain BN RGB

> :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/bnrgb.js, width=604, height=339

Luma, por otro lado, es definida como la corrección de gamma en una señal de video. Los más usados actualmente son UIT-R BT 601 (TVSD) y UIT-R BT 709 (TVHD) que están definidos como Y’= 0.299R’+0.587V’+0.114A’ y Y’=0.2126R’+0.7152V’+0.0722A’.

Wolverine image processed to ascii art with P5 to obtain BN using Luma

> :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/luma.js, width=604, height=339
    
Fingers 

> :P5 sketch=/docs/sketches/videobn.js, width=650, height=240


The markdown of the above sketch looks like:

```md
> :P5 lib1=https://unpkg.com/ml5@latest/dist/ml5.min.js, sketch=/docs/sketches/lib.js, width=512, height=512
```

> :ToCPrevNext