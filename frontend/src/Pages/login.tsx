import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"

import { axiosClient } from "../axios"
export default function LoginForm() {
    "use client"


const formSchema = z.object({
  email: z.string().email().min(10).max(30),
  password: z.string().min(8).max(30),
})
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email : 'Abdo2004@example.com',
        password : '123456789',
    }
    
  })
 
  // submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Fetch CSRF token
       await axiosClient.get('/sanctum/csrf-cookie');
  
      // POST request
      const data = await axiosClient.post('/login', values);
      console.log('Login successful:', data);
    } catch (error: any) {
      if (error.response?.status === 422) {
        form.setError('email', { message: 'Invalid credentials' });
      } else if (error.response?.status === 419) {
        console.error('CSRF token mismatch:', error);
      } else {
        console.error('Login failed:', error);
      }
    }
  }

    return (
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="Email..." {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type= {'password'} placeholder="Password..." {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    
)
}
