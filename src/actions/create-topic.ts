'use server'

import {z} from 'zod'

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/[a-z-]/, {message: 'Must be lowercase letters'}),
    description: z.string().min(10)
})

export async function createTopic(formState: number, formData: FormData) {
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description'),
    })
    return 10
}