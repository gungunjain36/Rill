import supabase from './supabase'

export default async function Waitlist(email: string) {
    console.log('Adding email to waitlist:', email);
    const { error } = await supabase
    .from('waitlist')
    .insert({ 
        email, 
        created_at: new Date().toISOString() 
    })
    .select()

    if (error) {
        console.error('Error storing waitlist:', error)
        return { success: false, error }
    }
    
    return { success: true }
}
