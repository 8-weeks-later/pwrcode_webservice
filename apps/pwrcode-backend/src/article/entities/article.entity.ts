import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ })
export class Article {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    type: string;

    @Column()
    title: string;
  
    @Column()
    author: string;

    @Column()
    content: string;
    
    @Column()
    image_id: string;
    
    @Column()
    hashtag_id: string;

}
