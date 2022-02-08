/* eslint-disable @typescript-eslint/naming-convention */
import { timeStamp } from 'console';
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    
    pgm.createExtension('uuid-ossp', { ifNotExists: true });
    pgm.createTable('users', {
        id: {
            type: 'uuid',
            primaryKey: true,
            default: pgm.func('uuid_generate_v4()')
        },
        name: {
            type: 'TEXT',
            notNull: true
        },
        email: {
            type: 'TEXT',
            unique: true,
            notNull: true
        },
        password: {
            type: 'TEXT',
            notNull: true,
        },
        isActive: {
            type: 'TEXT', 
            default: 'false'
        },
        date_created: {
            type: 'timestamp',
            default: pgm.func('current_timestamp')
        }
    })
    pgm.createTable('tweets', {
        id: {
            type: 'uuid',
            primaryKey: true,
            default: pgm.func('uuid_generate_v4()')
        },
        userId: {
            type: "uuid",
            references: 'users(id)',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        tweetBody: {
            type: 'TEXT'
        },
        image: {
            type: 'TEXT'
        },
        whoCanReply: {
            type: 'TEXT'
        },
        cloudinary_id: {
            type: 'TEXT'
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        }

    })
    pgm.createTable('comments', {
        id: {
            type: 'uuid',
            primaryKey: true,
            default: pgm.func('uuid_generate_v4()')
        },
        userId: {
            type: 'uuid',
            references: 'users(id)',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        tweetId: {
            type: 'uuid',
            references: 'tweets(id)',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        }

    })
    pgm.createTable('likes', {
        id: {
            type: 'uuid',
            default: pgm.func('uuid_generate_v4()'),
            primaryKey: true
        },
        userId: {
            type: 'uuid',
            references: 'users(id)',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        tweetId: {
            type: 'uuid',
            references: 'tweets(id)',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        }
    })
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('users')
    pgm.dropTable('tweets')
    pgm.dropTable('likes')
    pgm.dropTable('comments')
}
