using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ukol2
{
    class Program
    {
        static void Main(string[] args)
        {

        }
    }
    class ComplexNumber
    {
        public double Real;
        public double Imaginary;

        public Vector(double real, double imaginary)
        {
            Real = real;
            Imaginary = imaginary;
        }
        public void Add(other Real, other Imaginary)
        {
            Real = other.Real;
            Imaginary = Vector.Imaginary;
        }
    }
}
