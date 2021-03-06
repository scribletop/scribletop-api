import { ApiProperty } from '@nestjs/swagger';
import * as slugify from '@sindresorhus/slugify';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsUrl, MinLength } from 'class-validator';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('systems')
export class System {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ unique: true })
  @ApiProperty({ readOnly: true })
  slug: string;

  @Column()
  @ApiProperty()
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  @MinLength(3, { always: true })
  name: string;

  @Column({ type: 'text' })
  @ApiProperty()
  @IsNotEmpty({ always: true })
  @IsString({ always: true })
  description: string;

  @Column({ nullable: true })
  @ApiProperty()
  @IsOptional()
  @IsUrl({}, { always: true })
  image: string;

  @BeforeInsert()
  beforeInsert(): void {
    this.slug = slugify(this.name);
  }
}
