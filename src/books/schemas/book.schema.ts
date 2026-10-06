import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({ collection: 'books' })
export class Book {
    @Prop({ required: true })
    public title: string; 


    @Prop({ required: true })
    public authors: string;

    @Prop()
    public description: string;

    @Prop()
    public favorite: string;

    @Prop()
    public fileCover: string;

    @Prop()
    public fileName: string;

    @Prop()
    public fileBook: string;

    @Prop()
    public id: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);