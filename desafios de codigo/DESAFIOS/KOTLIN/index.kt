object ReceitaFederal {
    fun calcularImposto(salario: Double): Double{
        val aliquota = when {
            (salario >= 0 && salario <= 1100) -> 0,05
            else -> TODO("criar condições para as aliquotas de 10,00% e 15,00%)
        }
    return aliquota * salario
    } 

}

fum main() {
    val valorSalario = readLine()!!.toDouble();
    val valorBeneficios = readLine()!!.toDouble();

    val valorImposto = ReceitaFederal.calcularImposto(valorSalario);
    val saida = valorSalario - valorImposto + valorBeneficios

    println(string.format("%.2f", saida));
}